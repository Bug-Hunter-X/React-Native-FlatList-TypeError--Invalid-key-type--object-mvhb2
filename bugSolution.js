The solution is to modify the `keyExtractor` function to return a string or number. The `id` property should be a primitive type, not an object.

```javascript
//Correct usage
<FlatList
  data={[{id: '1'}, {id: '2'}]}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => <Text>{item.id}</Text>}
/>

//Alternatively, if the id is a number:
<FlatList
  data={[{id: 1}, {id: 2}]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <Text>{item.id}</Text>}
/>
```