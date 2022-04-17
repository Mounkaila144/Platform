import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import axios from "axios";
import {Backdrop, CircularProgress, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PubCard from "../components/card/PubCard";
import {orange, pink, red} from "@mui/material/colors";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ListContext from "@mui/material/List/ListContext";
import List from "@mui/material/List";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Menu() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);

    return (
        <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 12, sm: 12, md: 12}}>
            <Grid item xs={12} sm={12} md={12}>
                <Box>
                    <Grid container spacing={{xs: 1, md: 1}} columns={{xs: 12, sm: 12, md: 12}} alignContent={"center"}
                          justifyContent={'center'}>
                        <Grid item xs={10} sm={10} md={5}>
                            <Box component="div"
                                 sx={{overflow: 'auto', fontSize: 15, marginBottom: 2, color: 'white'}}>
                                Bienvenue sur Allcine227 ici sera rediger la presentation du Boutique
                            </Box>
                            <IconButton aria-label="cart">
                                <MonetizationOnIcon sx={{fontSize: 50, marginTop: -2, color: orange[900]}}/>
                                <Box component="div"
                                     sx={{overflow: 'auto', fontSize: 32, marginBottom: 2, color: 'white'}}>
                                    Nos tarifs
                                </Box>
                            </IconButton>

                        </Grid>
                    </Grid>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div"
                                 sx={{
                                     overflow: 'auto',
                                     fontSize: 25,
                                     fontWeight: "bold",
                                     marginLeft: 5,
                                     color: 'black'
                                 }}>
                                SERIES
                            </Box>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        1 saison à 500f
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        2 saisons à 1000f
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        3 saisons à 1500f
                                    </Box>
                                </ListItem>
                            </List>

                            <Box component="div"
                                 sx={{overflow: 'auto', fontSize: 19, color: 'black'}}>
                                A partir de 2000f,beneficiez d une saison bonus de votre choix
                            </Box>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div"
                                 sx={{
                                     overflow: 'auto',
                                     fontSize: 25,
                                     fontWeight: "bold",
                                     marginLeft: 5,
                                     color: 'black'
                                 }}>
                                FILM ET ANIME
                            </Box>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        1 film a 200f
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        3 films a 500f
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div"
                                 sx={{
                                     overflow: 'auto',
                                     fontSize: 25,
                                     fontWeight: "bold",
                                     marginLeft: 5,
                                     color: 'black'
                                 }}>
                                MANGA
                            </Box>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{color: "white"}}/>
                                    </ListItemIcon>
                                    <Box component="div"
                                         sx={{overflow: 'auto', fontSize: 17, color: 'black'}}>
                                        40 épisodes a 500f
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div" sx={{overflow: 'auto', fontSize: 17, marginBottom: 2, marginTop: 2}}>
                                Si vous achetez une clé USB ou une carte mémoire,<br/>
                                vous bénéficierez d'un remplissage gratuit<br/>
                                <Box component="div"
                                     sx={{overflow: 'auto', fontSize: 17, color: 'white'}}>
                                    De votre choix
                                </Box>

                            </Box>
                        </CardContent>
                    </Card>


                </Box>

            </Grid>
        </Grid>

    )
}