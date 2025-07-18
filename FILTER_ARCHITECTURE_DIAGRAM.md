# Modular Filter Framework - Visual Architecture

## Component Hierarchy Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          FilterProvider                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    Global Filter State                     │  │
│  │  ┌─────────────────────┬─────────────────────────────┐   │  │
│  │  │   Applied Filters   │    Pending Filters         │   │  │
│  │  ├─────────────────────┼─────────────────────────────┤   │  │
│  │  │ • selectedMonths[]  │ • selectedMonths[]        │   │  │
│  │  │ • selectedQuarters[]│ • selectedQuarters[]      │   │  │
│  │  │ • selectedYears[]   │ • selectedYears[]         │   │  │
│  │  │ • activeMode        │ • activeMode              │   │  │
│  │  └─────────────────────┴─────────────────────────────┘   │  │
│  │  • hasChanges: boolean (pending ≠ applied)              │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      ModularPeriodFilter                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────┐  ┌──────────┐  │
│  │   Segmented Control │  │ Selection Display │  │   Logo   │  │
│  │  ┌───┬───┬───┐     │  │  ┌─────────────┐ │  │          │  │
│  │  │ M │ Q │ Y │     │  │  │ PeriodChips │ │  │  [Logo]  │  │
│  │  └───┴───┴───┘     │  │  └─────────────┘ │  │          │  │
│  └─────────────────────┘  └──────────────────┘  └──────────┘  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Quick Presets                         │   │
│  │  [ This Month ]  [ Last 3 Months ]  [ Custom Range ]   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
            ┌─────────────────────────────────────┐
            │            Popover Panel            │
            │  ┌───────────────────────────────┐  │
            │  │      MultiSelectPanel         │  │
            │  ├───────────────────────────────┤  │
            │  │  🔍 Search...                 │  │
            │  │  ┌─────────────────────────┐ │  │
            │  │  │ ☐ January    ☐ July    │ │  │
            │  │  │ ☐ February   ☐ August   │ │  │
            │  │  │ ☐ March      ☐ Sept     │ │  │
            │  │  │ ☐ April      ☐ October  │ │  │
            │  │  │ ☐ May        ☐ November │ │  │
            │  │  │ ☐ June       ☐ December │ │  │
            │  │  └─────────────────────────┘ │  │
            │  │  [Select All]    [Clear]     │  │
            │  ├───────────────────────────────┤  │
            │  │  [Reset]    [Apply Filters]  │  │
            │  └───────────────────────────────┘  │
            └─────────────────────────────────────┘
```

## Apply Filter Concept Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      Apply Filter Pattern                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. User Makes Selection                                         │
│     └─> Updates pendingFilter state only                        │
│                                                                  │
│  2. Visual Feedback                                              │
│     └─> Orange dot • "Unsaved changes"                         │
│                                                                  │
│  3. User Clicks Apply                                           │
│     └─> pendingFilter → appliedFilter                          │
│     └─> Triggers API calls                                      │
│     └─> Updates all components                                  │
│                                                                  │
│  4. Success Feedback                                            │
│     └─> Green checkmark ✓ "Filters applied"                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
┌─────────────┐     User Interaction      ┌──────────────────┐
│    User     │ ────────────────────────> │ ModularFilter    │
└─────────────┘                           └──────────────────┘
                                                    │
                                         ┌──────────┴──────────┐
                                         ▼                     ▼
                                  ┌──────────────┐      ┌──────────────┐
                                  │   Pending    │      │    Apply     │
                                  │   Changes    │      │   Button     │
                                  └──────────────┘      └──────────────┘
                                         │                     │
                                         └──────────┬──────────┘
                                                    ▼
                                          ┌──────────────────┐
                                          │  FilterContext   │
                                          │  (State Update)  │
                                          └──────────────────┘
                                                    │
                                    ┌───────────────┴───────────────┐
                                    ▼                               ▼
                            ┌──────────────┐               ┌──────────────┐
                            │  Frontend    │               │   Backend    │
                            │  Components  │               │   API Call   │
                            └──────────────┘               └──────────────┘
                                    │                               │
                                    ▼                               ▼
                            ┌──────────────┐               ┌──────────────┐
                            │   Re-render  │               │  SQL Query   │
                            │   with new   │               │     with     │
                            │    data      │               │  IN clauses  │
                            └──────────────┘               └──────────────┘
```

## Component Communication Flow

```
ModularPeriodFilter
    │
    ├── uses ──> FilterContext (global state)
    │                │
    │                ├── periodFilter (applied)
    │                ├── pendingFilter (user selections)
    │                ├── hasChanges (boolean)
    │                ├── handlePendingChange()
    │                ├── applyFilters()
    │                └── resetFilters()
    │
    ├── renders ──> SegmentedControl
    │                   │
    │                   └── onChange ──> handleModeChange ──> pendingFilter
    │
    ├── renders ──> SelectionDisplay
    │                   │
    │                   ├── contains ──> PeriodChips
    │                   │                    │
    │                   │                    └── shows appliedSelections
    │                   │
    │                   └── onClick ──> setIsOpen(true)
    │
    └── renders ──> Popover
                        │
                        └── contains ──> MultiSelectPanel
                                            │
                                            ├── onChange ──> handleSelectionChange
                                            ├── onApply ──> applyFilters()
                                            ├── onReset ──> resetFilters()
                                            │
                                            └── features:
                                                  • Search (debounced)
                                                  • Select All/Clear
                                                  • View Density
                                                  • Keyboard Nav
                                                  • Apply/Reset buttons
```

## State Management Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                      FilterContext State                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Initial State:                                              │
│  periodFilter: {                   pendingFilter: {         │
│    selectedMonths: [7],              selectedMonths: [7],   │
│    selectedQuarters: [],             selectedQuarters: [],  │
│    selectedYears: [2025],            selectedYears: [2025], │
│    activeMode: 'M'                   activeMode: 'M'        │
│  }                                 }                         │
│  hasChanges: false                                          │
│                                                              │
│  After User Selection (before apply):                       │
│  periodFilter: {                   pendingFilter: {         │
│    selectedMonths: [7],              selectedMonths: [1,2,3],│
│    selectedQuarters: [],             selectedQuarters: [],  │
│    selectedYears: [2025],            selectedYears: [2025], │
│    activeMode: 'M'                   activeMode: 'M'        │
│  }                                 }                         │
│  hasChanges: true ⚠️                                        │
│                                                              │
│  After Apply:                                               │
│  periodFilter: {                   pendingFilter: {         │
│    selectedMonths: [1,2,3],          selectedMonths: [1,2,3],│
│    selectedQuarters: [],             selectedQuarters: [],  │
│    selectedYears: [2025],            selectedYears: [2025], │
│    activeMode: 'M'                   activeMode: 'M'        │
│  }                                 }                         │
│  hasChanges: false ✓                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Backend Query Generation

```
Frontend Selection          Backend SQL Generation
─────────────────          ──────────────────────

selectedMonths: [1,2,3]    WHERE month IN (1,2,3)
selectedYears: [2024]      AND year IN (2024)

selectedQuarters: [1,2]    WHERE quarter IN (1,2)
selectedYears: [2024]      AND year IN (2024)
                          (internally converts to months)

selectedMonths: [11,12]    WHERE (
selectedYears: [2023,2024]   (year = 2023 AND month IN (11,12))
                             OR
                             (year = 2024 AND month IN (11,12))
                           )

Multi-mode selection:      WHERE year IN (2024)
months: [1,2,3]           AND (month IN (1,2,3) OR quarter IN (2))
quarters: [2]             
```

## Hybrid Design System Implementation

```
┌─────────────────────────────────────────────────────────────┐
│                    Design System Fusion                      │
├─────────────────┬───────────────────┬──────────────────────┤
│   Material UI   │   Ant Design     │   Apple Design       │
├─────────────────┼───────────────────┼──────────────────────┤
│ • Ripple effects│ • Checkbox groups │ • Segmented control  │
│ • Elevation     │ • Dense layouts   │ • Glass morphism     │
│ • Clear states  │ • Bulk actions    │ • Spring animations  │
│ • Transitions   │ • Data tables     │ • Minimal aesthetic  │
└─────────────────┴───────────────────┴──────────────────────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │  Implementation  │
                 ├──────────────────┤
                 │ Libraries Used:  │
                 │ • Framer Motion  │
                 │ • Radix UI       │
                 │ • Tailwind CSS   │
                 │                  │
                 │ Patterns:        │
                 │ • Backdrop blur  │
                 │ • Spring physics │
                 │ • Hover states   │
                 │ • Focus rings    │
                 └──────────────────┘
```

## Component Interaction States

```
┌─────────────────────────────────────────────────────────────┐
│                    Interaction States                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Default State:                                              │
│  ┌─────────────────────────────────┐                       │
│  │ [M] Q Y │ 3 months selected ▼ │ [Logo]                 │
│  └─────────────────────────────────┘                       │
│                                                              │
│  Hover State:                                                │
│  ┌─────────────────────────────────┐                       │
│  │ [M] Q Y │ 3 months selected ▼ │ [Logo]                 │
│  └─────────────────────────────────┘                       │
│     Shadow elevation + border color change                  │
│                                                              │
│  Active/Open State:                                          │
│  ┌─────────────────────────────────┐                       │
│  │ [M] Q Y │ 3 months selected ▲ │ [Logo]                 │
│  └─────────────────────────────────┘                       │
│     Border: primary color, Scale: 1.02                      │
│                                                              │
│  Unsaved Changes State:                                      │
│  ┌─────────────────────────────────┐                       │
│  │ [M] Q Y │ 3 months • Unsaved ▼ │ [Logo]               │
│  └─────────────────────────────────┘                       │
│     Orange dot indicator                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Responsive Behavior

```
Desktop (>1024px)           Tablet (768-1024px)        Mobile (<768px)
─────────────────           ──────────────────         ───────────────

┌─────────────────┐         ┌──────────────┐           ┌────────────┐
│ [M] [Q] [Y]     │         │ [M] [Q] [Y]  │           │[M][Q][Y]   │
│                 │         │              │           │            │
│ Jan, Feb, Mar+2 │         │ Jan, Feb +3  │           │ 5 selected │
│                 │         │              │           │            │
│ [Quick Presets] │         │ [Presets]    │           │ [▼]        │
└─────────────────┘         └──────────────┘           └────────────┘

Popover:                    Popover:                   Fullscreen:
400px width                 350px width                100% width
3 columns                   2 columns                  1 column
All features                Compact view               Essential only
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                   Optimization Layers                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Component Level:                                         │
│     • React.memo for expensive renders                      │
│     • useMemo for derived calculations                      │
│     • useCallback for event handlers                        │
│     • Lazy loading popover content                         │
│                                                              │
│  2. State Management:                                        │
│     • Debounced search (300ms)                             │
│     • Batched state updates                                │
│     • Local state for UI-only changes                      │
│     • Pending vs Applied state separation                  │
│                                                              │
│  3. Data Fetching:                                         │
│     • Only fetch on Apply (not every selection)           │
│     • 5-minute cache for API responses                     │
│     • Request deduplication                               │
│     • Optimistic UI updates                               │
│                                                              │
│  4. Rendering:                                             │
│     • Virtual scrolling for 100+ items                    │
│     • CSS containment for layout stability                │
│     • AnimatePresence for smooth transitions              │
│     • Conditional rendering for mobile                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Implementation Checklist

```
✅ Core Components
   ✅ ModularPeriodFilter container
   ✅ MultiSelectPanel with checkboxes
   ✅ PeriodChips for selection display
   ✅ ServiceFilter integration

✅ State Management
   ✅ FilterContext with pending/applied states
   ✅ Multi-select arrays support
   ✅ Backward compatibility
   ✅ Apply/Reset functionality

✅ Backend Integration
   ✅ API methods updated for arrays
   ✅ SQL queries with IN clauses
   ✅ Service type filtering
   ✅ Cross-year selections

✅ UI/UX Features
   ✅ Segmented control (Apple-style)
   ✅ Popover with search
   ✅ View density options
   ✅ Quick presets
   ✅ Apply confirmation feedback
   ✅ Unsaved changes indicator

✅ Design System
   ✅ Framer Motion animations
   ✅ Radix UI components
   ✅ Glass morphism effects
   ✅ Brand colors integration
   ✅ Responsive design
```