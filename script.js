function bubbleSort(arr)
{
    
  let n=arr.length;
    for( let i=0;i<n-1;i++)
    {
        let flag=0;
        for(let j=0;j<n-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
        if(flag==0)
        {
            break;
        }
    }
    return arr;
}
document.write(bubbleSort([6,3,9,1,0]));

