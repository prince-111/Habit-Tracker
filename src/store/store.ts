import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDate: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
}

// set is used for setting any values inside of our store
// get is obviously to get a particular value
const useHabitStore = create<HabitState>()((set, get) => {
  return {
    habits: [],
    addHabit: (name, frequency) =>
      set(state => {
        return {
          habits: [
            {
              id: "1",
              name: "coding",
              frequency: "daily",
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
  };
});

export default useHabitStore;
