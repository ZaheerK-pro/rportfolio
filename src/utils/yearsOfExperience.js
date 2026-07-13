// Career start — value updates automatically each month
const CAREER_START = new Date(2023, 10, 1) // Nov 2023

export function getYearsOfExperience() {
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth())

  return `${(totalMonths / 12).toFixed(1)}+`
}
