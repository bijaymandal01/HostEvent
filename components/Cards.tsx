'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
    title:string;
    image:string;
    slug:string;
    location:string;
    date:string;
    time:string;
}
export const CardsFeatured = ({ image, title,slug,location,time,date }:Props) => {
  return (
    <div>

    <Card className="relative w-full overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-30 bg-black/35" />

      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover brightness-75"
      />

      <CardHeader className="relative z-40">
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>

        <CardTitle>{title}</CardTitle>

        <CardDescription>
            {location}-{date}-{time}
        </CardDescription>
      </CardHeader>

      <CardFooter className="relative z-40">
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
    </div>
  )
}