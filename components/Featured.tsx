import { CardsFeatured } from "./Cards"

const events = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug:'event-2',
    location:"location-1",

    date:"date-2",
    time:"time-2",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug:'event-2',
    location:"location-2",

    date:"date-2",
    time:"time-2",
  },
  {
    image: "/images/event3.png",
    title: "Event 3",
    slug:'event-2',
    location:"location",

    date:"date-2",
    time:"time-2",
  },
    {
    image: "/images/event4.png",
    title: "Event 4",
    slug:'event-2',
    location:"location",

    date:"date-2",
    time:"time-2",
  },
]

export const Featured = () => {
  return (
    <div>
      <h3 className="px-6 md:px-14 mt-16 text-xl font-semibold"
      id="features"
      >
        Featured Events
      </h3>

      <ul className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-14">
        {events.map((event) => (
          <li key={event.title}>
            <CardsFeatured {...event} />
          </li>
        ))}
      </ul>
    </div>
  )
}