import { Settings as SettingsIcon, Bell, Moon, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="min-h-screen bg-medical-soft-gradient">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <SettingsIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Customize your medication reminder experience</p>
          </div>

          <div className="space-y-6">
            {/* Notification Settings */}
            <Card className="shadow-medicine-card border-0 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Bell className="h-5 w-5 text-medical-primary" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="push-notifications" className="text-base font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive reminders when it's time to take your medicine</p>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="reminder-sound" className="text-base font-medium">Reminder Sound</Label>
                    <p className="text-sm text-muted-foreground">Play a sound with medication reminders</p>
                  </div>
                  <Switch id="reminder-sound" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="snooze-reminders" className="text-base font-medium">Snooze Reminders</Label>
                    <p className="text-sm text-muted-foreground">Allow snoozing reminders for 10 minutes</p>
                  </div>
                  <Switch id="snooze-reminders" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="missed-dose-alerts" className="text-base font-medium">Missed Dose Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when you miss a scheduled dose</p>
                  </div>
                  <Switch id="missed-dose-alerts" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Moon className="h-5 w-5 text-medical-primary" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="dark-mode" className="text-base font-medium">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Switch to dark theme for better night viewing</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="compact-view" className="text-base font-medium">Compact View</Label>
                    <p className="text-sm text-muted-foreground">Show more medications in less space</p>
                  </div>
                  <Switch id="compact-view" />
                </div>
              </CardContent>
            </Card>

            {/* General Settings */}
            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Globe className="h-5 w-5 text-medical-primary" />
                  General
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="24-hour-format" className="text-base font-medium">24-Hour Time Format</Label>
                    <p className="text-sm text-muted-foreground">Display time in 24-hour format instead of AM/PM</p>
                  </div>
                  <Switch id="24-hour-format" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="week-start-monday" className="text-base font-medium">Week Starts on Monday</Label>
                    <p className="text-sm text-muted-foreground">Start calendar weeks on Monday instead of Sunday</p>
                  </div>
                  <Switch id="week-start-monday" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="auto-mark-taken" className="text-base font-medium">Auto-mark as Taken</Label>
                    <p className="text-sm text-muted-foreground">Automatically mark medications as taken when dismissed</p>
                  </div>
                  <Switch id="auto-mark-taken" />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-medical-primary" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="biometric-lock" className="text-base font-medium">Biometric Lock</Label>
                    <p className="text-sm text-muted-foreground">Require fingerprint or face ID to access the app</p>
                  </div>
                  <Switch id="biometric-lock" />
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-medium text-foreground mb-2">Data Management</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="flex-1">
                        Export Data
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Clear All Data
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="shadow-medicine-card border-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">MedReminder v1.0</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with ❤️ to help you stay consistent with your medication routine
                  </p>
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button variant="ghost" size="sm">Privacy Policy</Button>
                    <Button variant="ghost" size="sm">Terms of Service</Button>
                    <Button variant="ghost" size="sm">Support</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;