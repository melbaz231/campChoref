export const camp = {
  name: 'Camp Choref',
  season: 2026,
  yearBadge: 'Back for a 13th year',
  tagline: 'The best way to cool off this summer',
  who: 'Boys going into 2nd – 7th grade',
  where: 'TBA — location shared before camp starts',
  datesLabel: 'July 31 – August 11',
  hoursLabel: '10:00am – 2:30pm',
  costLabel: '$150 per week',
  director: 'Rabbi S. Winters',
  phone: '216-403-0443',
  email: 'campchoref@gmail.com',
} as const;

export const highlights = [
  { title: 'Sports', description: 'Baseball, basketball and daily league games.', icon: '⚾' },
  { title: 'Trips', description: 'Off-site adventures every week of camp.', icon: '🚌' },
  { title: 'BBQ', description: 'Fired-up cookouts the boys look forward to.', icon: '🔥' },
  { title: 'Learning', description: 'Meaningful daily learning built into the schedule.', icon: '📖' },
  { title: 'Raffles', description: 'Weekly raffles that keep the energy high.', icon: '🎟️' },
  { title: 'Prizes', description: 'Rewards for effort, teamwork and middos.', icon: '🏆' },
] as const;

export const quickFacts = [
  { label: 'Who', value: camp.who },
  { label: 'When', value: `${camp.datesLabel} · ${camp.hoursLabel}` },
  { label: 'Where', value: camp.where },
  { label: 'Cost', value: camp.costLabel },
] as const;

export const campDetails = [
  {
    title: 'Tuition & payment',
    body: 'The day camp fee is $150 a week, due at the beginning of each week. Pay by cash, check (made out to Cash/Camp Choref), Quickpay or Zelle to campchoref@gmail.com.',
  },
  {
    title: 'Daily hours',
    body: 'Camp begins at 10:00am and ends at 2:30pm.',
  },
  {
    title: 'Early pickup',
    body: 'If your son needs to be picked up early on a given day, please call in advance so we can confirm our location at that time.',
  },
  {
    title: 'What to send',
    body: 'Send a lunch, sunscreen and a water bottle with your son each day. Please note that we will not have hot water available to use.',
  },
  {
    title: 'Electronics',
    body: 'No cell phones, Mp3/Mp4 players or any electronics. The director will have his phone available for use if necessary.',
  },
  {
    title: 'Bikes & scooters',
    body: 'We cannot take responsibility for personal bikes or scooters, so please bring a lock to secure them while at camp.',
  },
  {
    title: 'Baseball',
    body: 'We plan on playing baseball — please bring a mitt.',
  },
  {
    title: 'Label everything',
    body: 'Please label everything brought to camp to avoid loss and confusion. After camp, all items left behind will be hefker.',
  },
  {
    title: 'Overnight trip',
    body: 'There is an additional fee for the over-day the older bunks will be going on. A note will be sent home with the details.',
  },
] as const;

export const gradeOptions = ['2nd', '3rd', '4th', '5th', '6th', '7th'] as const;

export const weekOptions = [
  { id: 'week-1', label: 'Week 1 — July 31 – August 4' },
  { id: 'week-2', label: 'Week 2 — August 7 – August 11' },
] as const;

export const paymentOptions = [
  { id: 'cash', label: 'Cash' },
  { id: 'check', label: 'Check' },
  { id: 'quickpay', label: 'Quickpay' },
  { id: 'zelle', label: 'Zelle' },
] as const;
