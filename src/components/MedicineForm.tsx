import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Clock, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
}

interface MedicineFormProps {
  onAddMedicine: (medicine: Omit<Medicine, 'id'>) => void;
}

export const MedicineForm = ({ onAddMedicine }: MedicineFormProps) => {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !dosage.trim() || !time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to add your medicine.",
        variant: "destructive",
      });
      return;
    }

    onAddMedicine({
      name: name.trim(),
      dosage: dosage.trim(),
      time,
    });

    setName("");
    setDosage("");
    setTime("");

    toast({
      title: "Medicine Added",
      description: `${name} has been added to your reminders.`,
    });
  };

  return (
    <Card className="w-full max-w-md shadow-medicine-card border-0 bg-card animate-fade-in">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-2">
          <Plus className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">Add Medicine</CardTitle>
        <CardDescription className="text-muted-foreground">
          Set up your medication reminder
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="medicine-name" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Pill className="h-4 w-4 text-medical-primary" />
              Medicine Name
            </Label>
            <Input
              id="medicine-name"
              type="text"
              placeholder="e.g., Aspirin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-border focus:ring-medical-primary focus:border-medical-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dosage" className="text-sm font-medium text-foreground">
              Dosage
            </Label>
            <Input
              id="dosage"
              type="text"
              placeholder="e.g., 100mg"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="border-border focus:ring-medical-primary focus:border-medical-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-medical-primary" />
              Time
            </Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border-border focus:ring-medical-primary focus:border-medical-primary"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-medical-gradient hover:opacity-90 text-white font-medium py-2.5 transition-all duration-200 shadow-soft hover:shadow-floating"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Medicine
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};