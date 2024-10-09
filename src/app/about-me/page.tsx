import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Naruto from "@/app/assets/naruto2.jpg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
                <Image src={Naruto} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Aaliya
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to do sudoku!</div>
            </CardContent>
        </Card>
        <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>I have added an alert</AlertDescription>
        </Alert>
    </div>
  );
}