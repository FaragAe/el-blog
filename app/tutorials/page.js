"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TutorialsPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn the basics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Start your journey with our comprehensive introduction guide.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Advanced Concepts</CardTitle>
            <CardDescription>Deep dive into advanced topics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Explore advanced features and best practices.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tips & Tricks</CardTitle>
            <CardDescription>Helpful techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Discover useful tips to enhance your workflow.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}