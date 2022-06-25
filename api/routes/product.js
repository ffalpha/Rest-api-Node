const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Get request to /productss"
    });
})


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST request to /products",
        
    });
})

router.get('/:productID', (req, res, next) => {
    const id =req.params.productID
    if(id==='special'){
        res.status(200).json({
            message: "Handling POST request to /products special",
            id:id
            
        });
    }else{
        res.status(200).json({
            message: "Handling POST request to /products",
            id:id
            
        });
    }
   
})

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: "Updated prdouct",
        
    });
})


router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: "Deleted prdouct",
        
    });
})


module.exports = router