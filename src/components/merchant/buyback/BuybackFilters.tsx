import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, MoreVertical } from 'lucide-react';

interface BuybackFiltersProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  wireframeStyles: {
    input: string;
  };
}

const BuybackFilters = ({
  globalFilter,
  setGlobalFilter,
  statusFilter,
  setStatusFilter,
  wireframeStyles
}: BuybackFiltersProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="h-9 px-3 flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search requests..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className={`pl-8 h-9 w-[200px] ${wireframeStyles.input}`}
          />
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="h-9 px-3"
        >
          <Download className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="h-9 px-2"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BuybackFilters;