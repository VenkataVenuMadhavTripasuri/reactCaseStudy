
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



import Button from '@mui/material/Button';


export default function ViewPosts() {
  
  return (
            <Card 
                sx={{
                    marginTop: 8,
                    marginLeft:60,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 340,
                    height:500
                   }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500],  }} aria-label="recipe">
                    VM
                </Avatar>
                }
               
                
                title="Venkata Venu Madhav Tripasuri"
            />
            <CardContent>

             <Typography gutterBottom variant="h4" color="text.primary">
                 Edit Profile
                </Typography>
            <CardMedia
                component="img"
                height="200"
                image="https://media-exp1.licdn.com/dms/image/C4E03AQFjcFAs_1kjsg/profile-displayphoto-shrink_200_200/0/1614872952223?e=1658361600&v=beta&t=rUsbN0G5Mp4lXKsyK4Zy-vxgCoU1Xt1d_2ZhlQy88rU"
            />

                <Typography variant="body5" color="text.primary">
                Venkat Venu Madhav Tripasuri  
                </Typography>
                <Typography  color="text.secondary">
                  password:-898581
                </Typography>
            </CardContent>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>

            </Card>
  );
}
