'use client'

import { Suspense, lazy, ComponentType } from 'react'

interface DynamicLoaderProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

export default function DynamicLoader({ 
  component, 
  fallback = <LoadingSpinner />, 
  ...props 
}: DynamicLoaderProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Pre-built dynamic loaders for common heavy components
export const DynamicConsultationForm = (props: any) => (
  <DynamicLoader
    component={() => import('@/components/forms/ConsultationForm')}
    fallback={
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }
    {...props}
  />
)

export const DynamicCalendar = (props: any) => (
  <DynamicLoader
    component={() => import('@/components/ui/Calendar')}
    fallback={
      <div className="bg-white rounded-lg shadow p-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    }
    {...props}
  />
)