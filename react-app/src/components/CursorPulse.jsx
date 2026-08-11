import useCursorPulse from '../hooks/useCursorPulse';

export default function CursorPulse() {
  useCursorPulse();
  return <div id="cursorPulse" className="cursor-pulse" />;
}
