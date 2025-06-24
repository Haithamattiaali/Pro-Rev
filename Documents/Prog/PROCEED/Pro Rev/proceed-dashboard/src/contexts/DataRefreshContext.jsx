import React, { createContext, useContext, useState, useCallback } from 'react'

const DataRefreshContext = createContext()

export const useDataRefresh = () => {
  const context = useContext(DataRefreshContext)
  if (!context) {
    throw new Error('useDataRefresh must be used within a DataRefreshProvider')
  }
  return context
}

export const DataRefreshProvider = ({ children }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [refreshing, setRefreshing] = useState(false)

  // Trigger a global data refresh
  const triggerRefresh = useCallback(async (options = {}) => {
    const { 
      showNotification = true, 
      message = 'Data updated successfully',
      duration = 3000 
    } = options

    console.log('Triggering global data refresh...')
    setRefreshing(true)
    
    // Increment the refresh trigger to notify all listening components
    setRefreshTrigger(prev => prev + 1)
    
    // Show notification if requested
    if (showNotification) {
      // You could integrate with a toast notification system here
      console.log(message)
    }
    
    // Small delay to ensure all components have time to start their refresh
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
    
  }, [])

  // Clear any refresh state
  const clearRefresh = useCallback(() => {
    setRefreshing(false)
  }, [])

  // Get current refresh state
  const getRefreshState = useCallback(() => ({
    refreshTrigger,
    refreshing,
    lastRefresh: new Date().toISOString()
  }), [refreshTrigger, refreshing])

  const value = {
    refreshTrigger,
    refreshing,
    triggerRefresh,
    clearRefresh,
    getRefreshState
  }

  return (
    <DataRefreshContext.Provider value={value}>
      {children}
    </DataRefreshContext.Provider>
  )
}

export default DataRefreshContext