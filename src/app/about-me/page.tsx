import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Sudoku from "@/app/assets/sudoku.jpeg";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="p-5">
        Hello world, this is the 'About Me' route!
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello, I am Aaliya!
                </CardTitle>
                <CardDescription>
                    I like to do sudoku!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Sudoku} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Aaliya
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to do sudoku!</div>
            </CardContent>
        </Card>
    </div>
  );
}
