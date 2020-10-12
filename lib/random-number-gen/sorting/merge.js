exports.mergeSortFn = (arr) => {

    let N = arr.length;
    const aL = new Float32Array(Math.floor(N/2));
    const aR = new Float32Array(Math.ceil(N/2));

    const merge = (l, m, r) => {
        const n1 = m - l + 1;
        const n2 = r - m;

        // Copy data to left and right temp arrays, aL[] and aR[]
        for (let i = 0; i < n1; ++i) {
          aL[i] = arr[l + i];
        }
        for (let i = 0; i < n2; ++i) {
          aR[i] = arr[m + 1 + i];
        }

        // Merge the temp arrays back into arr[l..r]
        let i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
          arr[k++] = (aL[i] <= aR[j])? aL[i++] : aR[j++];
        }

        // Copy the remaining elements of aL[], if any
        while (i < n1) {
          arr[k++] = aL[i++];
        }

        // Copy the remaining elements of aR[], if any
        while (j < n2) {
          arr[k++] = aR[j++];
        }
    };

    const mergeSort = (l, r) => {
        if (l < r) {
            const m = l + Math.floor((r - l) / 2); // = (l + r)/2
            mergeSort(l, m);
            mergeSort(m + 1, r);
            merge(l, m, r);
        }
    };

    mergeSort(0, N - 1);

    return arr;
};
