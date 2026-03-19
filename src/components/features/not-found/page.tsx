import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Card, CardContent } from "@/components/ui/card";
export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <Card className="mx-4 w-full max-w-md">
        <CardContent className="pt-6">
          <div className="mb-4 flex gap-2">
            <HugeiconsIcon
              className="h-8 w-8 text-red-500"
              icon={AlertCircleIcon}
            />
            <h1 className="font-bold text-2xl text-gray-900">
              404 Page Not Found
            </h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
