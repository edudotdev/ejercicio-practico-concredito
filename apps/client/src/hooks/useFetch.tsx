import { useEffect, useState } from 'react'

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [endpoint])

  const hydrateData = () => fetchData()

  return {
    data,
    loading,
    setData,
    hydrateData
  }
}