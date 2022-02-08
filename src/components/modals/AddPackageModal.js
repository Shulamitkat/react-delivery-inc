import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    //maxWidth: "500px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    fontfamily: "Georgia",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    background: "#f4f7f8"
  },
  area: {
    width: "100%",
    background: "rgba(255,255,255,.1)",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    outline: "0",
    padding: "10px",
    margin: "1em auto",
    boxSizing: "border-box",
    backgroundColor: "#e8eeef",
    color: "#8a97a0"
  },
  submit: {
    color: "#FFF",
    margin: "1em auto",
    background: "#1976d2",
    fontSize: "18px",
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
    border: "1px solid #1976d2",
    borderRadius: "4px",
    borderWidth: "1px 1px 3px",
    marginBottom: "10px",
    padding: "15px",
    cursor: "pointer"
  }
}));

function AddPackageModal({ list, updateList, customerList }) {

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("default");

  const classes = useStyles(); 
  const { register, handleSubmit, setError, formState: { errors } } = useForm(); // initialise the hook

  const onSubmit = async data => {

    //Find the max shippingOrder number
    let max = Math.max.apply(Math, list.map(function(o) { return o.shippingOrder; }));
    data.customerid = parseInt(data.customerid);
    data.shippingOrder = max + 1;
    data.weight = data.weight + "kg";
    updateList([...list, data]);

    setOpen(false);
  
  };


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
     <AddIcon  onClick={() => {
                setOpen(!open);
              }}
         /> 
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className={classes.modal}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <h2>Adding New Package</h2>
          <input
            className={classes.area}
            name="id"
            placeholder="Package Id:"

            {...register('id', { required: true },{
                pattern: /[A-Za-z]{3}/
              })} 
        
            /*  ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+$/i,
                message: "invalid name"
              }
            })}
            
            "id": "pak1",
            "weight": "3kg",
            "customerid": 1,
            "price": 10,
            "shippingOrder": 4 */
    
          />

{errors.id && <p>Package Id is required.</p>}


<select className={classes.area}  defaultValue={value} onChange={handleChange} name="customerid"
{...register('customerid', { required: true })}  
  >
        <option value="default" disabled hidden>
        Customer Name:
        </option>

      {customerList.map(item => (
        <option 
          key={item.id}
          value={item.id}
        >
          {item.name}
        </option>
      ))}
</select>

{/* <input
            className={classes.area}
            name="customerid"
            placeholder="Customer Name:"

            {...register('customerid', { required: true },{
                pattern: /[A-Za-z]{3}/
              })}         
    
          /> */}

{errors.customerid && <p>Select Customer</p>}

<input
            className={classes.area}
            name="weight"
            placeholder="Weight:"

            {...register('weight', { required: true },{
                pattern: /[A-Za-z]{3}/
              })}         
    
          />

{errors.weight && <p>Weight is required.</p>}

<input
            className={classes.area}
            name="price"
            placeholder="Price:"

            {...register('price', { required: true },{
                pattern: /[A-Za-z]{3}/
              })}         
    
          />

{errors.price && <p>Price is required.</p>}

          <input className={classes.submit} type="submit" value="Add" />
          {console.log(errors)} 
        </form>
      </Modal>
    </div>
  );
}
export default AddPackageModal;

