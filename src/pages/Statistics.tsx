import { TrendingUp, Calendar, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Statistics = () => {
  // Mock data for demonstration
  const weeklyData = [
    { day: 'Mon', adherence: 100 },
    { day: 'Tue', adherence: 85 },
    { day: 'Wed', adherence: 90 },
    { day: 'Thu', adherence: 75 },
    { day: 'Fri', adherence: 95 },
    { day: 'Sat', adherence: 80 },
    { day: 'Sun', adherence: 88 },
  ];

  const medicineStats = [
    { name: 'Aspirin', adherence: 92, totalDoses: 30, takenDoses: 28 },
    { name: 'Vitamin D', adherence: 85, totalDoses: 30, takenDoses: 26 },
    { name: 'Metformin', adherence: 78, totalDoses: 60, takenDoses: 47 },
  ];

  return (
    <div className="min-h-screen bg-medical-soft-gradient">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Medication Statistics</h1>
            <p className="text-muted-foreground">Analyze your medication adherence patterns</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-medicine-card border-0 animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-medical-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">85%</h3>
                <p className="text-sm text-muted-foreground">Overall Adherence</p>
              </CardContent>
            </Card>

            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-medical-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-medical-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">7</h3>
                <p className="text-sm text-muted-foreground">Current Streak</p>
              </CardContent>
            </Card>

            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">21</h3>
                <p className="text-sm text-muted-foreground">Best Streak</p>
              </CardContent>
            </Card>

            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-medical-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">+12%</h3>
                <p className="text-sm text-muted-foreground">vs Last Month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekly Adherence Chart */}
            <Card className="shadow-medicine-card border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-medical-primary" />
                  Weekly Adherence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day, index) => (
                    <div key={day.day} className="flex items-center space-x-4 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <span className="w-8 text-sm font-medium text-muted-foreground">{day.day}</span>
                      <div className="flex-1">
                        <Progress 
                          value={day.adherence} 
                          className="h-3 bg-accent"
                        />
                      </div>
                      <span className="w-12 text-sm font-medium text-foreground">{day.adherence}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medicine-specific Statistics */}
            <Card className="shadow-medicine-card border-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Target className="h-5 w-5 text-medical-primary" />
                  Medicine Adherence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {medicineStats.map((medicine, index) => (
                    <div key={medicine.name} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{medicine.name}</h4>
                        <span className="text-sm font-medium text-foreground">{medicine.adherence}%</span>
                      </div>
                      <Progress 
                        value={medicine.adherence} 
                        className="h-2 mb-2 bg-accent"
                      />
                      <p className="text-sm text-muted-foreground">
                        {medicine.takenDoses} of {medicine.totalDoses} doses taken
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Section */}
          <Card className="mt-8 shadow-medicine-card border-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-medical-primary" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-medical-light rounded-lg">
                  <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">7-Day Streak</h4>
                    <p className="text-sm text-muted-foreground">Keep it up!</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-medical-light rounded-lg">
                  <div className="w-10 h-10 bg-medical-primary rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Perfect Week</h4>
                    <p className="text-sm text-muted-foreground">100% last week</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-medical-light rounded-lg">
                  <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Improving</h4>
                    <p className="text-sm text-muted-foreground">+12% this month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statistics;