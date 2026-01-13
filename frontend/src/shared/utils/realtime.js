/**
 * Real-time features using WebSocket simulation
 * In production, replace with actual WebSocket connection
 */

class RealtimeService {
  constructor() {
    this.listeners = new Map()
    this.isConnected = false
    this.reconnectAttempts = 0
    this.maxReconnectAttempts = 5
    this.reconnectDelay = 1000
  }

  /**
   * Simulate WebSocket connection
   * In production, replace with: new WebSocket('ws://your-server.com')
   */
  connect() {
    if (this.isConnected) {
      return
    }

    // Simulate connection
    this.isConnected = true
    this.reconnectAttempts = 0
    
    console.log('[Realtime] Connected')
    this.emit('connected', {})
    
    // Simulate receiving messages
    this.startSimulation()
  }

  /**
   * Simulate receiving real-time messages
   */
  startSimulation() {
    // In production, this would be actual WebSocket message handling
    // For now, we simulate with setInterval
    this.simulationInterval = setInterval(() => {
      // Simulate random events
      if (Math.random() > 0.95) {
        this.emit('notification', {
          type: 'info',
          message: 'Có bài viết mới trong cộng đồng',
          timestamp: new Date().toISOString(),
        })
      }
    }, 10000) // Every 10 seconds
  }

  disconnect() {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval)
      this.simulationInterval = null
    }
    
    this.isConnected = false
    console.log('[Realtime] Disconnected')
    this.emit('disconnected', {})
  }

  /**
   * Subscribe to an event
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event).add(callback)
    
    return () => {
      this.off(event, callback)
    }
  }

  /**
   * Unsubscribe from an event
   */
  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback)
    }
  }

  /**
   * Emit an event to all listeners
   */
  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((callback) => {
        try {
          callback(data)
        } catch (error) {
          console.error(`[Realtime] Error in listener for ${event}:`, error)
        }
      })
    }
  }

  /**
   * Send a message (simulated)
   * In production: this.ws.send(JSON.stringify(message))
   */
  send(message) {
    if (!this.isConnected) {
      console.warn('[Realtime] Not connected, cannot send message')
      return
    }
    
    console.log('[Realtime] Sending:', message)
    
    // Simulate server response
    setTimeout(() => {
      this.emit('message', {
        id: Date.now(),
        ...message,
        timestamp: new Date().toISOString(),
      })
    }, 100)
  }

  /**
   * Reconnect with exponential backoff
   */
  reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('[Realtime] Max reconnect attempts reached')
      return
    }
    
    this.reconnectAttempts++
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1)
    
    console.log(`[Realtime] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})`)
    
    setTimeout(() => {
      this.connect()
    }, delay)
  }
}

// Singleton instance
const realtimeService = new RealtimeService()

/**
 * Hook for real-time features
 */
export const useRealtime = () => {
  useEffect(() => {
    realtimeService.connect()
    
    return () => {
      realtimeService.disconnect()
    }
  }, [])
  
  const subscribe = (event, callback) => {
    return realtimeService.on(event, callback)
  }
  
  const send = (message) => {
    realtimeService.send(message)
  }
  
  return {
    isConnected: realtimeService.isConnected,
    subscribe,
    send,
  }
}

export default realtimeService

