import { Clock, Pill, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const History = () => {
  // Mock data for demonstration
  const medicationHistory = [
    {
      id: "1",
      name: "Aspirin",
      dosage: "100mg",
      takenAt: "2024-01-15T08:00:00",
      status: "taken",
    },
    {
      id: "2",
      name: "Vitamin D",
      dosage: "1000 IU",
      takenAt: "2024-01-15T09:00:00",
      status: "taken",
    },
    {
      id: "3",
      name: "Metformin",
      dosage: "500mg",
      takenAt: "2024-01-14T20:00:00",
      status: "missed",
    },
    {
      id: "4",
      name: "Aspirin",
      dosage: "100mg",
      takenAt: "2024-01-14T08:00:00",
      status: "taken",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const groupedHistory = medicationHistory.reduce((groups: any, item) => {
    const date = formatDate(item.takenAt);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-medical-soft-gradient">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Medication History</h1>
            <p className="text-muted-foreground">Track your medication adherence over time</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="shadow-medicine-card border-0 animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-medical-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-medical-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">85%</h3>
                <p className="text-sm text-muted-foreground">Adherence Rate</p>
              </CardContent>
            </Card>

            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-medical-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Pill className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">12</h3>
                <p className="text-sm text-muted-foreground">Doses This Week</p>
              </CardContent>
            </Card>

            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">7</h3>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
          </div>

          {/* History Timeline */}
          <div className="space-y-6">
            {Object.entries(groupedHistory).map(([date, items]: [string, any]) => (
              <Card key={date} className="shadow-medicine-card border-0 animate-fade-in">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-medical-primary" />
                    {date}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {items.map((item: any, index: number) => (
                      <div 
                        key={item.id} 
                        className="flex items-center justify-between p-3 bg-accent/30 rounded-lg animate-slide-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.status === 'taken' 
                              ? 'bg-medical-secondary/20' 
                              : 'bg-destructive/20'
                          }`}>
                            <Pill className={`h-5 w-5 ${
                              item.status === 'taken' 
                                ? 'text-medical-secondary' 
                                : 'text-destructive'
                            }`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.dosage}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-muted-foreground">
                            {formatTime(item.takenAt)}
                          </span>
                          <Badge 
                            variant={item.status === 'taken' ? 'default' : 'destructive'}
                            className={item.status === 'taken' 
                              ? 'bg-medical-secondary text-white' 
                              : ''
                            }
                          >
                            {item.status === 'taken' ? 'Taken' : 'Missed'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;