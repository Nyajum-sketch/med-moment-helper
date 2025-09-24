import { useState } from "react";
import { MedicineForm } from "@/components/MedicineForm";
import { MedicineList } from "@/components/MedicineList";
import heroImage from "@/assets/medicine-hero.jpg";
import { Heart } from "lucide-react";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
}

const Index = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const addMedicine = (medicine: Omit<Medicine, 'id'>) => {
    const newMedicine: Medicine = {
      ...medicine,
      id: Date.now().toString(),
    };
    setMedicines([...medicines, newMedicine]);
  };

  const deleteMedicine = (id: string) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id));
  };

  return (
    <div className="bg-medical-soft-gradient">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medicine reminder app" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-medical-gradient opacity-10"></div>
        </div>
        
        <div className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center animate-pulse-soft">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl animate-fade-in">
              Medicine Dashboard
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Manage your medications and never miss a dose again
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Medicine Form */}
            <div className="flex justify-center lg:justify-end">
              <MedicineForm onAddMedicine={addMedicine} />
            </div>
            
            {/* Medicine List */}
            <div className="flex justify-center lg:justify-start">
              <MedicineList medicines={medicines} onDeleteMedicine={deleteMedicine} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground text-sm">
        <p>Stay healthy, stay consistent with your medication routine.</p>
      </footer>
    </div>
  );
};

export default Index;