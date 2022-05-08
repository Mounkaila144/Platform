import React, {useEffect, useState} from 'react';
import {useCart} from "react-use-cart";
import axios from "axios";
import Button from "@mui/material/Button";
import {useAuthUser} from "react-auth-kit";
import Card from "@mui/material/Card";
import {Alert, AlertTitle, Badge, Grid, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import {orange} from "@mui/material/colors";
import {useAuthHeader} from 'react-auth-kit'
import ArticleCard from "../components/card/article";




function Profile() {
    const [product, setProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [aalert,setAlert]=useState(false)
    const [c, setC] = useState(0);
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const url = `https://127.0.0.1:8000/api/users/${id}`


    const getData =async () => {
        axios
            .get(url,{
                headers:{
                    "name":"",
                    "password":""
                }
            })
            .then(
                (res) => {
                    setProduct(res.data);

                },
                (error) => {
                    setIsLoaded(true);
                }
            )
    }
console.log(product)
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
                <h3>{product.id}</h3>
                <h3>{product.username}</h3>
        </div>
    )
        ;
}


export default Profile
