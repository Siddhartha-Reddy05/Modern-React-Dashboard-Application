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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, Tooltip
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

const TotalRefundIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8L8 16" stroke="#FF4A55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8L16 16" stroke="#FF4A55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FF4A55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AverageSalesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V22" stroke="#4F75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#4F75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TotalIncomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V6" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V22" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 7.07L7.76 9.9" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.24 14.1L19.07 16.93" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H6" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12H22" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 16.93L7.76 14.1" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.24 9.9L19.07 7.07" stroke="#FFB648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendingUp = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5" stroke="#34CAA5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 0.5H9.5V4" stroke="#34CAA5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendingDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 5.5H9.5V2" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Stats cards data
const stats = [
  { 
    title: 'Total Revenues', 
    value: '$2,129,430', 
    icon: <TotalOrdersIcon />,
    color: '#FFB648',
    bgColor: 'rgba(150, 231, 170, 0.2)'
  },
  { 
    title: 'Total Transactions', 
    value: '1,520', 
    icon: <TotalRefundIcon />,
    color: '#FF4A55',
   bgColor: 'rgba(255, 214, 153, 0.2)'
  },
  { 
    title: 'Total Likes', 
    value: '9,721',
    icon: <AverageSalesIcon />,
    color: '#4F75FF',
    bgColor: 'rgba(255, 127, 127, 0.2)'
  },
  { 
    title: 'Total Users', 
    value: '892', 
    icon: <TotalIncomeIcon />,
    color: '#FFB648',
    bgColor: 'rgba(127, 161, 255, 0.2)'
  },
];

// Activities data for the area chart
const activitiesData = [
  { name: 'Week 1', guest: 100, user: 50 },
  { name: 'Week 2', guest: 200, user: 100 },
  { name: 'Week 3', guest: 150, user: 200 },
  { name: 'Week 4', guest: 300, user: 250 },
  { name: 'Week 5', guest: 250, user: 300 },
  { name: 'Week 6', guest: 400, user: 350 },
  { name: 'Week 7', guest: 350, user: 400 },
];

// Top platform data
const platformData = [
  { name: 'Basic Tees', amount: 5500, percentage: 55, color: '#6160DC' },
  { name: 'Custom Shorts Pants', amount: 3100, percentage: 31, color: '#54C5EB' },
  { name: 'Super Hoodies', amount: 1400, percentage: 14, color: '#FF4A55' },
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

  // Custom tooltip for activities chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{ 
          background: '#fff', 
          border: '1px solid #E5EAEF', 
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography variant="body2" sx={{ color: '#8B8D97' }}>{label}</Typography>
          {payload.map((entry, index) => (
            <Typography 
              key={`tooltip-${index}`} 
              variant="body2" 
              sx={{ 
                color: entry.color, 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                mt: 0.5
              }}
            >
              <Box 
                sx={{ 
                  width: 8, 
                  height: 8, 
                  borderRadius: '50%', 
                  bgcolor: entry.color,
                  mr: 1
                }} 
              />
              {entry.name}: {entry.value.toLocaleString()}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  // Custom tooltip for pie chart
  const PieChartTooltip = ({ active, payload }) => {
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
            {`${payload[0].name}: ${payload[0].value}%`}
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

  // Render activities chart
  const renderActivitiesChart = () => (
    <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Activities</Typography>
            <Typography variant="body2" sx={{ color: '#8B8D97' }}>
              {timeRange === 'week' ? 'May - June 2023' : '2023 Yearly Overview'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleMenu}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: 'none',
                color: '#8B8D97',
                borderColor: '#E5EAEF',
                '&:hover': {
                  borderColor: '#8B8D97',
                  backgroundColor: 'transparent'
                }
              }}
            >
              {timeRange === 'week' ? 'Weekly' : 'Monthly'}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={() => handleTimeRangeChange('week')}>
                Weekly
              </MenuItem>
              <MenuItem onClick={() => handleTimeRangeChange('month')}>
                Monthly
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activitiesData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorGuest" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#98D89E" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#98D89E" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EE8484" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#EE8484" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F5F5" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#8B8D97', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left"
                orientation="left"
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#8B8D97', fontSize: 12 }}
              />
              <RechartsTooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top"
                align="right"
                iconType="circle"
                formatter={(value) => (
                  <span style={{ color: '#8B8D97', fontSize: '12px' }}>{value}</span>
                )}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="guest" 
                name="Guest"
                stroke="#98D89E" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorGuest)" 
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="user" 
                name="User"
                stroke="#EE8484" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorUser)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );

  // Render top products
  const renderTopProducts = () => (
    <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Top Products</Typography>
          <Typography variant="body2" sx={{ color: '#34CAA5', cursor: 'pointer' }}>See All</Typography>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="amount"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<PieChartTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );

  // Render today's schedule
  const renderTodaysSchedule = () => (
    <Card sx={{ height: '100%', borderRadius: '12px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)' }}>
      <CardContent sx={{ p: 3 }}>
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
          <IconButton
            sx={{
              width: '40px',
              height: '40px',
              color: '#8B8D97',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Stats Cards */}
      {renderStatsCards()}
      
      {/* Main Content */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {renderActivitiesChart()}
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={12} md={8}>
            {renderTopProducts()}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderTodaysSchedule()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
