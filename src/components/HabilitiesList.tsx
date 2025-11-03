import Badge from "./Badge";

export default function HabilitiesList({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-3 mt-4 w-full px-7">
            {items.map((item, index) => (
                <Badge key={index}>{item}</Badge>
            ))}
        </div>
    );
}
