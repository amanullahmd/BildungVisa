'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CalendarProps {
  selected?: Date
  onSelect?: (date: Date) => void
  disabled?: (date: Date) => boolean
  className?: string
  minDate?: Date
  maxDate?: Date
}

const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  disabled,
  className = '',
  minDate,
  maxDate
}) => {
  const [currentMonth, setCurrentMonth] = useState(selected || new Date())

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    
    if (disabled && disabled(clickedDate)) {
      return
    }
    
    if (minDate && clickedDate < minDate) {
      return
    }
    
    if (maxDate && clickedDate > maxDate) {
      return
    }
    
    if (onSelect) {
      onSelect(clickedDate)
    }
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    
    if (disabled && disabled(date)) {
      return true
    }
    
    if (minDate && date < minDate) {
      return true
    }
    
    if (maxDate && date > maxDate) {
      return true
    }
    
    return false
  }

  const isDateSelected = (day: number) => {
    if (!selected) return false
    
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return (
      date.getDate() === selected.getDate() &&
      date.getMonth() === selected.getMonth() &&
      date.getFullYear() === selected.getFullYear()
    )
  }

  const isToday = (day: number) => {
    const today = new Date()
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10"></div>
      )
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isDisabled = isDateDisabled(day)
      const isSelected = isDateSelected(day)
      const isTodayDate = isToday(day)

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={isDisabled}
          className={cn(
            'h-10 w-10 rounded-md text-sm font-medium transition-colors',
            'hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
            {
              'bg-blue-600 text-white hover:bg-blue-700': isSelected,
              'bg-blue-100 text-blue-600 font-semibold': isTodayDate && !isSelected,
              'text-gray-400 cursor-not-allowed hover:bg-transparent': isDisabled,
              'text-gray-900': !isSelected && !isTodayDate && !isDisabled
            }
          )}
        >
          {day}
        </button>
      )
    }

    return days
  }

  return (
    <div className={cn('p-4 bg-white border border-gray-200 rounded-lg shadow-sm', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateMonth('prev')}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <h2 className="text-lg font-semibold text-gray-900">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateMonth('next')}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="h-10 flex items-center justify-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>

      {/* Footer with today button */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const today = new Date()
            setCurrentMonth(today)
            if (onSelect) {
              onSelect(today)
            }
          }}
          className="w-full"
        >
          Today
        </Button>
      </div>
    </div>
  )
}

export default Calendar
export { Calendar }