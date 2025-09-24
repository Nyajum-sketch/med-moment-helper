import { Clock, Pill, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
}

interface MedicineListProps {
  medicines: Medicine[];
  onDeleteMedicine: (id: string) => void;
}

export const MedicineList = ({ medicines, onDeleteMedicine }: MedicineListProps) => {
  const { toast } = useToast();

  const handleDelete = (medicine: Medicine) => {
    onDeleteMedicine(medicine.id);
    toast({
      title: "Medicine Removed",
      description: `${medicine.name} has been removed from your reminders.`,
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  if (medicines.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
          <Pill className="h-8 w-8 text-medical-primary" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No medicines added yet</h3>
        <p className="text-muted-foreground">Add your first medicine to get started with reminders</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl space-y-3">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Pill className="h-5 w-5 text-medical-primary" />
        Your Medicines ({medicines.length})
      </h2>
      
      {medicines.map((medicine, index) => (
        <Card 
          key={medicine.id} 
          className="shadow-medicine-card border-0 bg-card hover:shadow-floating transition-all duration-200 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-medical-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg truncate">
                    {medicine.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {medicine.dosage}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-medical-primary bg-medical-light px-3 py-2 rounded-lg">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    {formatTime(medicine.time)}
                  </span>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(medicine)}
                className="ml-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};