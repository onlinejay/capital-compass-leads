
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import HeroOption1 from '@/components/hero-options/HeroOption1';
import HeroOption2 from '@/components/hero-options/HeroOption2';
import HeroOption3 from '@/components/hero-options/HeroOption3';

const HeroOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Hero & Logo Options</h1>
            <Link to="/">
              <Button variant="outline">Back to Homepage</Button>
            </Link>
          </div>
          <p className="text-gray-600 mt-2">Select an option to preview different hero and logo styles</p>
        </header>

        <Tabs defaultValue="option1" className="w-full" onValueChange={setSelectedOption}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="option1">Modern Gradient</TabsTrigger>
            <TabsTrigger value="option2">Bold & Vibrant</TabsTrigger>
            <TabsTrigger value="option3">Clean & Minimal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="option1" className="border-0 p-0">
            <HeroOption1 />
          </TabsContent>
          
          <TabsContent value="option2" className="border-0 p-0">
            <HeroOption2 />
          </TabsContent>
          
          <TabsContent value="option3" className="border-0 p-0">
            <HeroOption3 />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HeroOptions;
