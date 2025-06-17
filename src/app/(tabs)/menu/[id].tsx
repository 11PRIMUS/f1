import { Stack, useLocalSearchParams } from 'expo-router';
import {View, Text} from 'react-native';
import products from '@assets/data/products';
import { defaultpImage } from '../../../components/ProductListItem';


const sizes=['S','M','L','XL'];

const ProductDetailsScreen=()=>{
    const {id}=useLocalSearchParams();

    const product =products.find((p)=> p.id.toString()=id);

    if(!product){
        return <Text>Product not found</Text>
    }
    return(
        <View style={styles.container}>
            <Stack.Screen options={{title:'Details:'+id}}/>
            <Image source={{uri:product.image || defaultpImage }} style={styles.image}/>

            <Text>Select size</Text>
            <View style={styles.size}>
                {sizes.map((size)=>(
                    <View style={styles.size} key={size}>
                        <Text key={styles.size}>{size}</Text>
                    </View>
                    ))}
            </View>

            <Text style={{styles.price}}>${product.price}</Text>
        </View>
    );
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        padding:10,
    },
    image:{
        width:'100%',
        aspectRatio:1,
    },
    price:{
        fontsize:18,
        fontWeight:'bold',
    },

    sizes:{
        flexDirection:'row',
        justifyContent:'space-arpound',
        marginVertical:10,
    },
    size:{
        backgroundColor:'gainsboro',
        width:50,
        aspectRatio:25,
        alignItems:'center',
        justifyContent:'500',
    },
    sizeText:{
        fontSize:20,
        fontWeight:'500',
    },
});

export default ProductDetailsScreen;
