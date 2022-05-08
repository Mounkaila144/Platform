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
import Typography from "@mui/material/Typography";

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
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div" sx={{overflow: 'auto', fontSize: 30, marginBottom: 2, marginTop: 2}}>
                                <h2>MILLIONNAIRE
                                    CODES</h2>
                                <Typography variant="h3" component="h2" sx={{textAlign:"center",color:"red"}}>
                                    MANIFESTE
                                    D’enrichissement
                                    MASSIF
                                </Typography>
                                <Typography variant="p" component="p">
                                    A l’instant où j’écris ces lignes, le monde entier
                                    croupi dans une misère atroce due au simple fait que 1%
                                    de la population possède près de la moitié de la fortune
                                    mondiale, en d’autres termes 47 millions de millionnaires
                                    (en dollars) possèdent 44% de l’ensemble du patrimoine
                                    privé mondial, selon le crédit suisse. 92% de la
                                    population mondiale réunit gagne donc deux fois moins
                                    que ces 1%
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
    )
}