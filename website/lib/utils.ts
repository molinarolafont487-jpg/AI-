import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCertificateNumber(level: 'S' | 'A' | 'B', sequence: number): string {
  const year = new Date().getFullYear()
  const seq = sequence.toString().padStart(4, '0')
  const base = `DAC-AI-${year}-${level}-${seq}`

  // 生成校验位 (简单的校验算法)
  const checksum = base.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 256
  const checksumHex = checksum.toString(16).toUpperCase().padStart(2, '0')

  return `${base}-${checksumHex}`
}

export function validateCertificateNumber(certNo: string): boolean {
  const pattern = /^DAC-AI-\d{4}-[SAB]-\d{4}-[0-9A-F]{2}$/
  return pattern.test(certNo)
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')
}
