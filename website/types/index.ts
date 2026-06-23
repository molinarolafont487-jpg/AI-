export interface Certification {
  id: string
  certificateNo: string
  name: string
  level: 'S' | 'A' | 'B'
  type: string
  issueDate: Date
  expiryDate?: Date
  status: 'active' | 'expired' | 'revoked'
  qrCode?: string
}

export interface Assessment {
  id: string
  name: string
  company?: string
  industry: string
  email?: string
  phone?: string
  scores: {
    toolUsage: number
    contentProduction: number
    businessConversion: number
    geoCapability: number
  }
  totalScore: number
  level: 'S' | 'A' | 'B' | 'C'
  suggestions: string[]
  createdAt: Date
}

export interface Contact {
  id: string
  type: 'enterprise' | 'government' | 'partner'
  name: string
  company: string
  position?: string
  phone: string
  email: string
  message?: string
  status: 'pending' | 'contacted' | 'converted'
  createdAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  price: number
  duration: string
  level: 'basic' | 'advanced' | 'expert'
  features: string[]
}
