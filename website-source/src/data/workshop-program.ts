// Public sessions from the Opening Event's Program draft, checked November 25.
// Titles, panel membership and moderators are resolved from the event record.
type Session = {
  start: string;
  end: string;
} & (
  | { kind: 'talk' | 'keynote'; speaker: string }
  | { kind: 'panel'; panel: number }
  | { kind: 'spotlights' }
  | { kind: 'remarks' | 'overview'; title: string; speaker: string }
  | { kind: 'break' | 'meal' | 'arrival'; title: string }
);

export const workshopProgram: Session[] = [
  { start: '08:30', end: '09:00', kind: 'arrival', title: 'Check-in and breakfast' },
  { start: '09:00', end: '09:30', kind: 'remarks', title: 'Opening remarks', speaker: 'Shafi Goldwasser' },
  { start: '09:30', end: '09:45', kind: 'talk', speaker: 'Boaz Barak' },
  { start: '09:45', end: '09:55', kind: 'overview', title: 'Introducing RESI / research overview', speaker: 'Adam Tauman Kalai' },
  { start: '09:55', end: '10:25', kind: 'spotlights' },
  { start: '10:25', end: '10:50', kind: 'break', title: 'Coffee break' },
  { start: '10:50', end: '11:05', kind: 'talk', speaker: 'Yael Tauman Kalai' },
  { start: '11:05', end: '11:10', kind: 'break', title: 'Break' },
  { start: '11:10', end: '11:55', kind: 'panel', panel: 0 },
  { start: '11:55', end: '12:10', kind: 'talk', speaker: 'Dylan Hadfield-Menell' },
  { start: '12:10', end: '13:10', kind: 'meal', title: 'Lunch' },
  { start: '13:10', end: '13:35', kind: 'keynote', speaker: 'Roy Rinberg' },
  { start: '13:35', end: '13:50', kind: 'talk', speaker: 'Zico Kolter' },
  { start: '13:50', end: '13:55', kind: 'break', title: 'Break' },
  { start: '13:55', end: '14:10', kind: 'talk', speaker: 'Elad Hazan' },
  { start: '14:10', end: '14:25', kind: 'talk', speaker: 'Nickolai Zeldovich' },
  { start: '14:25', end: '14:40', kind: 'talk', speaker: 'Mitchell Gordon' },
  { start: '14:40', end: '14:45', kind: 'break', title: 'Break' },
  { start: '14:45', end: '15:00', kind: 'talk', speaker: 'Orr Paradise' },
  { start: '15:00', end: '15:15', kind: 'talk', speaker: 'Vincent Conitzer' },
  { start: '15:15', end: '15:35', kind: 'break', title: 'Coffee break' },
  { start: '15:35', end: '15:50', kind: 'talk', speaker: 'Adam Gleave' },
  { start: '15:50', end: '16:05', kind: 'talk', speaker: 'Anat Perry' },
  { start: '16:05', end: '16:10', kind: 'break', title: 'Break' },
  { start: '16:10', end: '16:50', kind: 'panel', panel: 1 },
  { start: '16:50', end: '17:00', kind: 'remarks', title: 'Closing remarks', speaker: 'Vinod Vaikuntanathan' },
];

export function workshopTalkAnchor(name: string) {
  return `talk-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
}

function clock(value: string) {
  const [hour, minute] = value.split(':').map(Number);
  return { text: `${hour % 12 || 12}:${String(minute).padStart(2, '0')}`, period: hour < 12 ? 'am' : 'pm' };
}

export function workshopTimeRange(start: string, end: string) {
  const a = clock(start);
  const b = clock(end);
  return `${a.text}${a.period !== b.period ? a.period : ''}–${b.text}${b.period}`;
}
