import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertCircle, Check, X, Lock, Users, FileCheck } from "lucide-react";

const BPOSecurityDashboard = () => {
  const [securityStatus, setSecurityStatus] = useState({
    encryption: "active",
    access: "active",
    dataProtection: "warning",
    compliance: "active"
  });
  
  const [alerts, setAlerts] = useState([]);
  const [metrics, setMetrics] = useState({
    securityScore: 85,
    totalChecks: 147,
    activeThreats: 2,
    complianceRate: 98
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "active": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "error": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const SecurityMetricCard = ({ icon: Icon, title, value, detail }) => (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-xs text-gray-500">{detail}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            BPO Security Framework Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <SecurityMetricCard 
              icon={Lock}
              title="Security Score"
              value={`${metrics.securityScore}%`}
              detail="Overall system security"
            />
            <SecurityMetricCard 
              icon={FileCheck}
              title="Security Checks"
              value={metrics.totalChecks}
              detail="Tests completed today"
            />
            <SecurityMetricCard 
              icon={AlertCircle}
              title="Active Threats"
              value={metrics.activeThreats}
              detail="Requiring attention"
            />
            <SecurityMetricCard 
              icon={Users}
              title="Compliance Rate"
              value={`${metrics.complianceRate}%`}
              detail="Regulatory compliance"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Security Status</h3>
              <div className="space-y-3">
                {Object.entries(securityStatus).map(([key, status]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                    <span className={getStatusColor(status)}>
                      {status === "active" ? <Check /> : status === "warning" ? <AlertCircle /> : <X />}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-4">Recent Alerts</h3>
              <div className="space-y-2">
                {alerts.length > 0 ? alerts.map((alert, index) => (
                  <Alert key={index}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{alert}</AlertDescription>
                  </Alert>
                )) : (
                  <p className="text-gray-500 text-center py-4">No active alerts</p>
                )}
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BPOSecurityDashboard;
