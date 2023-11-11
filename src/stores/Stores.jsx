import {create} from 'zustand'
import initialData from '../data/mock/initialdata.json'



export const useDataStore = create((set)=>({
  data: initialData,
  updateData: (data) => {set(()=>({data: data}))}
}))