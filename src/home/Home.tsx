import React, { useMemo, CSSProperties } from 'react';
import { useGetList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { subDays, startOfDay } from 'date-fns';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    midCol: { flex: 1 },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
    header: { marginTop: '1em', paddingInline:'10vw', fontSize: '30px', textAlign: 'center'},
    subHeader: { marginBottom: '5em', paddingInline:'6vw', fontSize: '20px', textAlign: 'center'},
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

interface ImgMediaCardProps {
    title: string;
    desc: string;
    image: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({title, desc, image}) => {
    return (
        <Card sx={{ maxWidth: '32vw' }}>
            <CardMedia
                component="img"
                alt="home card"
                height="140"
                image={image}
            />
            <CardContent>
            <br />
                <Typography gutterBottom align="center" variant="h5" component="div">
                {title}
                </Typography>
                <Typography align="center" variant="body2" sx={{ color: 'text.secondary' }}>
                {desc}
                </Typography>
            </CardContent>
            <CardActions style={{ padding: '0px' }}>
                <Button size="large" fullWidth href='#' variant='contained' style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
                    Get Started
                </Button>
            </CardActions>
        </Card>
    )
};

const Home = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);


    // const { nbNewOrders, pendingOrders, revenue, recentOrders } = aggregation;
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <VerticalSpacer />
                <VerticalSpacer />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.singleCol}>
            </div>
            <div style={styles.flex}>
                <Spacer />
            </div>
            <div style={styles.singleCol}>
            </div>
            <div style={styles.singleCol}>
            </div>
        </div>
    ) : (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.header}>
                <Typography variant="inherit">
                    Managing your charging infrastructure or your Vessel fleet has never been easier. Get started with Sea.Energy today.
                </Typography>
            </div>
            <div style={styles.subHeader}>
                <Typography variant="inherit">
                    Sea.Energy is the operating system driving the Vessel ecosystem, providing companies, captains, charge point operators, a single integrated software solution.
                </Typography>
            </div>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                    <ImgMediaCard
                        title="Captain's Power Hub"
                        desc="Simplifying the way you power up your Vessels, this innovative app offers seamless access to charging stations, real-time availability updates"
                        image="./home-card1.jpg"
                        />
                        {/* <Spacer /> */}
                    </div>
                </div>
                <div style={styles.midCol}>
                    <div style={styles.flex}>
                    <ImgMediaCard
                        title="Port Authority"
                        desc="Easily manage your charge points, connect, publish and monetize them. Compatable with more than 50 manufacturers."
                        image="./home-card2.webp"
                        />
                        {/* <Spacer /> */}
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                    <ImgMediaCard
                        title="Captain's Power Hub"
                        desc="Simplifying the way you power up your Vessels, this innovative app offers seamless access to charging stations, real-time availability updates"
                        image="./home-card3.webp"
                        />
                        {/* <Spacer /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
