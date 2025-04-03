interface SummaryTextTopcProps {
  emoji: string;
  title: string;
  text: string;
  onTextChange?: (newText: string) => void;
}

export default function SummaryTextTopic({
  emoji,
  title,
  text,
}: SummaryTextTopcProps) {
  return (
    <div>
      <p className="text-base font-bold">
        {emoji} {title}
      </p>
      <ul>{text}</ul>
    </div>
  );
}
