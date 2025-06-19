import React, { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
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

const ThreeDotsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="#B2ABAB" stroke="#B2ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="#B2ABAB" stroke="#B2ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="#B2ABAB" stroke="#B2ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
  { 
    title: 'Total Refund', 
    value: '234', 
    change: '+23.5%',
    trend: 'down',
    icon: <TotalRefundIcon />,
    color: '#FF4A55',
    bgColor: 'rgba(255, 127, 127, 0.2)'
  },
  { 
    title: 'Average Sales', 
    value: '1,234', 
    change: '+23.5%',
    trend: 'down',
    icon: <AverageSalesIcon />,
    color: '#4F75FF',
    bgColor: 'rgba(127, 161, 255, 0.2)'
  },
  { 
    title: 'Total Income', 
    value: '$12,345', 
    change: '+23.5%',
    trend: 'up',
    icon: <TotalIncomeIcon />,
    color: '#FFB648',
    bgColor: 'rgba(255, 214, 153, 0.2)'
  },
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

// Recent orders data
const recentOrders = [
  { id: 1, customer: 'Marcus Bergson', date: 'Nov 15, 2023', amount: '$80,000', status: 'Paid', invoice: 'View' },
  { id: 2, customer: 'Jaydon Vaccaro', date: 'Nov 15, 2023', amount: '$150,000', status: 'Refund', invoice: 'View' },
  { id: 3, customer: 'Corey Schleifer', date: 'Nov 14, 2023', amount: '$87,000', status: 'Paid', invoice: 'View' },
  { id: 4, customer: 'Cooper Press', date: 'Nov 14, 2023', amount: '$100,000', status: 'Refund', invoice: 'View' },
  { id: 5, customer: 'Phillip Lubin', date: 'Nov 13, 2023', amount: '$78,000', status: 'Paid', invoice: 'View' },
];

// Dashboard component
const Dashboard = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('week');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
                    {stat.change.startsWith('+') ? (
                      <TrendingUpIcon sx={{ color: '#34CAA5', fontSize: 16, mr: 0.5 }} />
                    ) : (
                      <TrendingDownIcon sx={{ color: '#ED544E', fontSize: 16, mr: 0.5 }} />
                    )}
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: stat.change.startsWith('+') ? '#34CAA5' : '#ED544E',
                        fontWeight: 500
                      }}
                    >
                      {stat.change} from last week
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
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
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
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      mb: 3,
      p: 2.5
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Activities</Typography>
          <Typography variant="body2" sx={{ color: '#8B8D97' }}>May - June 2021</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="outlined"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClick}
            sx={{
              textTransform: 'none',
              borderColor: '#E5E7EB',
              color: '#1A1A1A',
              '&:hover': {
                borderColor: '#D1D5DB',
                backgroundColor: 'rgba(0, 0, 0, 0.02)'
              }
            }}
          >
            {timeRange === 'week' ? 'Weekly' : timeRange === 'month' ? 'Monthly' : 'Yearly'}
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
            <MenuItem onClick={() => handleTimeRangeChange('week')}>Weekly</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('month')}>Monthly</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('year')}>Yearly</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
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
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8B8D97', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <RechartsTooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#34CAA5"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={2}
              activeDot={{ r: 6, stroke: '#34CAA5', strokeWidth: 2, fill: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );

  // Render top products
  const renderTopProducts = () => (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      height: '100%',
      p: 2.5
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Top Products</Typography>
        <Button 
          endIcon={<ArrowDropDownIcon />}
          sx={{ 
            color: '#34CAA5', 
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          See All
        </Button>
      </Box>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={platformData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="percentage"
              nameKey="name"
              label
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
    </Card>
  );

  // Render today's schedule
  const renderTodaysSchedule = () => (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      height: '100%',
      p: 2.5
    }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 3 }}>Today's Schedule</Typography>
      <Box>
        {scheduleData.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              borderLeft: `3px solid ${item.color}`,
              pl: 2,
              mb: 3,
              '&:last-child': { mb: 0 }
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1A1A1A' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#8B8D97', mb: 0.5 }}>
              {item.time}
            </Typography>
            <Typography variant="body2" sx={{ color: '#8B8D97', fontSize: '12px' }}>
              {item.location}
            </Typography>
          </Box>
        ))}
      </Box>
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
      {renderActivitiesChart()}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderTopProducts()}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderTodaysSchedule()}
        </Grid>
      </Grid>
    </Box>
  );
};

  const handleTimeRangeChange = (value) => {
    setTimeRange(value);
    handleClose();
  };

  // Custom tooltip for the area chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{ 
          backgroundColor: '#fff', 
          padding: '8px 12px', 
          border: '1px solid #E5EAEF',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)'
        }}>
          <Typography variant="body2" sx={{ color: '#737373', fontSize: '12px' }}>
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
            backgroundColor: stat.bgColor
          }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                  {stat.icon}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ 
                    color: stat.trend === 'up' ? '#34CAA5' : '#ED544E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mr: 0.5
                  }}>
                    {stat.trend === 'up' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                    {stat.change}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8B8D97' }}>vs last week</Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                color: '#1A1A1A',
                mb: 0.5
              }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#8B8D97',
                fontSize: '14px'
              }}>
                {stat.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // Render activities chart
  const renderActivitiesChart = () => (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      height: '100%',
      p: 2.5,
      mb: 3
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Sales Trends</Typography>
          <Typography variant="body2" sx={{ color: '#8B8D97' }}>Short term sales performance</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ color: '#8B8D97' }}>Sort by:</Typography>
          <Button
            id="time-range-button"
            aria-controls={open ? 'time-range-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              backgroundColor: '#F7F8FA',
              color: '#8B8D97',
              borderRadius: '8px',
              textTransform: 'none',
              px: 2,
              height: '32px',
              '&:hover': {
                backgroundColor: '#F0F0F0',
              },
            }}
          >
            {timeRange === 'day' ? 'Daily' : timeRange === 'week' ? 'Weekly' : 'Monthly'}
          </Button>
          <Menu
            id="time-range-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'time-range-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleTimeRangeChange('day')}>Daily</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('week')}>Weekly</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('month')}>Monthly</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#34CAA5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8B8D97', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8B8D97', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#34CAA5" 
              fillOpacity={1} 
              fill="url(#colorRevenue)"
              strokeWidth={2}
              dot={{
                fill: '#34CAA5',
                stroke: '#fff',
                strokeWidth: 2,
                r: 4,
                fillOpacity: 1
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );

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
          <Typography variant="body2" sx={{ color: '#737373', fontSize: '12px' }}>
            {`${payload[0].name}: $${payload[0].value.toLocaleString()}`}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  // Render top products
  const renderTopProducts = () => (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      height: '100%',
      p: 2.5
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Top Platform</Typography>
        <Button 
          endIcon={<ArrowDropDownIcon />}
          sx={{ 
            color: '#34CAA5', 
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          See All
        </Button>
      </Box>
      <Box sx={{ height: '300px' }}>
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
    </Card>
  );

  // Render today's schedule
  const renderTodaysSchedule = () => (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      height: '100%',
      p: 2.5
    }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 3 }}>Today's Schedule</Typography>
      <Box>
        {scheduleData.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              borderLeft: `3px solid ${item.color}`,
              pl: 2,
              mb: 3,
              '&:last-child': { mb: 0 }
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1A1A1A' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#8B8D97', mb: 0.5 }}>
              {item.time}
            </Typography>
            <Typography variant="body2" sx={{ color: '#8B8D97', fontSize: '12px' }}>
              {item.location}
            </Typography>
          </Box>
        ))}
      </Box>
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
      {renderActivitiesChart()}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderTopProducts()}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderTodaysSchedule()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
            {/* Chart Container */}
            <div style={{ 
              width: isMobile ? '100%' : '60%', 
              height: isMobile ? '200px' : '220px',
              position: 'relative'
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topProductsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 50 : 60}
                    outerRadius={isMobile ? 70 : 80}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {topProductsData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div style={{ 
              width: isMobile ? '100%' : '40%', 
              paddingLeft: isMobile ? 0 : '20px',
              marginTop: isMobile ? '10px' : 0
            }}>
              {topProductsData.map((product, index) => (
                <div 
                  key={`legend-${index}`} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '16px',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}
                >
                  <div 
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: product.color, 
                      marginRight: '10px',
                      borderRadius: '2px',
                      flexShrink: 0
                    }} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      color: '#666',
                      marginRight: '10px'
                    }}>
                      {product.name}
                    </span>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 600,
                      color: '#333'
                    }}>
                      {product.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };


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
      {renderActivitiesChart()}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderTopProducts()}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderTodaysSchedule()}
        </Grid>
      </Grid>
    </Box>
  );
};


