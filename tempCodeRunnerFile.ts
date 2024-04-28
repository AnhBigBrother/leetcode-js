  // const BFS1 = (next: number[]) => {
  //   if (next.length === 0) return;
  //   const newNext = [];
  //   for (let x of next) {
  //     visited[x] = true;
  //     for (let y of neighbor[x]) {
  //       if (!visited[y]) {
  //         newNext.push(y);
  //         dFrom0[y] = dFrom0[x] + 1;
  //       }
  //     }
  //   }
  //   BFS1(newNext);
  // };
  // BFS1([0]);