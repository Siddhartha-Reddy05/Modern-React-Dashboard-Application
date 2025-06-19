import React, { useState } from 'react';
import { 
  Grid, Card, CardContent, Typography, Button, useTheme,
  Menu, MenuItem, IconButton, Box, TextField, InputAdornment,
  Divider, List, ListItem, ListItemText, ListItemAvatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';

// Icons
const TotalOrdersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12H15" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16H15" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8H10C10.5523 8 11 8.44772 11 9V11C11 11.5523 10.5523 12 10 12H9C8.44772 12 8 11.5523 8 11V9C8 8.44772 8.44772 8 9 8Z" fill="#FFB648"/>
    <path d="M9 8H10C10.5523 8 11 8.44772 11 9V11C11 11.5523 10.5523 12 10 12H9C8.44772 12 8 11.5523 8 11V9C8 8.44772 8.44772 8 9 8Z" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16H11" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 5C16 3.34315 14.6569 2 13 2H11C9.34315 2 8 3.34315 8 5V7H16V5Z" stroke="#734A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ... [Previous icon components remain the same] ...

// Stats cards data
const stats = [
  { 
    title: 'Total Orders', 
    value: '2,345', 
    change: '+23.5%',
    trend: 'up',
    icon: <TotalOrdersIcon />,
    color: '#FFB648',
    bgColor: 'rgba(255, 214, 153, 0.2)'
  },
  // ... [Other stat items remain the same] ...
];

// Revenue data for the area chart
const revenueData = [
  { name: 'Week 1', revenue: 4000 },
  { name: 'Week 2', revenue: 3000 },
  { name: 'Week 3', revenue: 5000 },
  { name: 'Week 4', revenue: 2780 },
  { name: 'Week 5', revenue: 1890 },
  { name: 'Week 6', revenue: 2390 },
  { name: 'Week 7', revenue: 3490 },
];

// Top platform data
const platformData = [
  { name: 'Book Bazaar', amount: 2500000, percentage: 15, color: '#6160DC' },
  { name: 'Artisan Aisle', amount: 1800000, percentage: 10, color: '#54C5EB' },
  { name: 'Toy Troop', amount: 1200000, percentage: 8, color: '#FFB74A' },
  { name: 'XStore', amount: 900000, percentage: 5, color: '#FF4A55' },
];

// Schedule data
const scheduleData = [
  {
    id: 1,
    title: 'Meeting with suppliers from Kuta Bali',
    time: '14.00-15.00',
    location: 'at Sunset Road, Kuta, Bali',
    color: '#9BDD7C',
  },
  {
    id: 2,
    title: 'Check operation at Giga Factory 1',
    time: '18.00-20.00',
    location: 'at Central Jakarta',
    color: '#6972C3',
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('week');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Event handlers
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTimeRangeChange = (value) => {
    setTimeRange(value);
    handleClose();
  };

  // Custom tooltip for the area chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{
          backgroundColor: '#fff',
          padding: '8px 12px',
          border: '1px solid #E5EAEF',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)'
        }}>
          <Typography variant="body2" sx={{ color: '#737373' }}>
            ${payload[0].value.toLocaleString()}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  // Render stats cards
  const renderStatsCards = () => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ 
            borderRadius: '12px', 
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
            height: '100%',
            backgroundColor: stat.bgColor,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }
          }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" fontWeight={700} mb={1}>
                    {stat.value}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {stat.trend === 'up' ? <TrendingUp /> : <TrendingDown />}
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: stat.trend === 'up' ? '#34CAA5' : '#ED544E',
                        ml: 1
                      }}
                    >
                      {stat.change}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // Render today's schedule
  const renderTodaysSchedule = () => (
    <Card sx={{ height: '100%', borderRadius: '12px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Today's Schedule</Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
        <List>
          {scheduleData.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start" sx={{ px: 0, py: 2 }}>
                <ListItemAvatar sx={{ minWidth: 12, mr: 2, mt: 1 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#1A1A1A' }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography variant="body2" sx={{ color: '#8B8D97' }}>{item.time}</Typography>
                      <Typography variant="body2" sx={{ color: '#8B8D97', fontSize: '0.75rem' }}>
                        {item.location}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Dashboard</Typography>
          <Typography variant="body2" sx={{ color: '#8B8D97' }}>Welcome to your dashboard</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#8B8D97' }} />
                </InputAdornment>
              ),
              sx: { 
                borderRadius: '12px',
                backgroundColor: '#F7F8FA',
                '& fieldset': { border: 'none' },
                width: '216px',
                height: '40px'
              }
            }}
          />
          <IconButton sx={{ 
            backgroundColor: '#F7F8FA', 
            borderRadius: '12px',
            width: '40px',
            height: '40px'
          }}>
            <NotificationsNoneIcon sx={{ color: '#8B8D97' }} />
          </IconButton>
          <Button 
            variant="contained" 
            endIcon={<ArrowDropDownIcon />}
            sx={{
              backgroundColor: '#0D062D',
              color: '#fff',
              borderRadius: '12px',
              textTransform: 'none',
              px: 2,
              height: '40px',
              '&:hover': {
                backgroundColor: '#0D062D',
                opacity: 0.9
              }
            }}
          >
            This Month
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      {renderStatsCards()}
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {renderActivitiesChart()}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderTodaysSchedule()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
