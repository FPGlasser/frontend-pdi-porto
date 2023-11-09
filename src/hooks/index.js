import { useContext } from 'react'
import { DataContext } from '../stores/Stores'

export const useData = () => {
  return useContext(DataContext)
}