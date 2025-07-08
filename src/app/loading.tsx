import Logo from '@/components/Logo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Logo className="h-24 w-24 animate-pulse" />
      </div>
    </div>
  );
}
