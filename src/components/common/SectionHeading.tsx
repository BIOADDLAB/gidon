export default function SectionHeading({
    eyebrow,
    title,
    description,
    light = false,
}: {
    eyebrow: string;
    title: string;
    description?: string;
    light?: boolean;
}) {
    return (
        <div className="text-center">
            <p className={`font-accent text-sm tracking-widest ${light ? 'text-white/70' : 'text-green-600'}`}>
                {eyebrow}
            </p>
            <h2 className={`mt-2 text-3xl font-bold ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
            {description && (
                <p className={`mt-4 whitespace-pre-line leading-relaxed ${light ? 'text-white/80' : 'text-ink-500'}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
