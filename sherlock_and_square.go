import "math"

func square_check(a int) bool {
	var int_root int = int(math.Sqrt(float64(a)))
	return (int_root * int_root) == a
}

// Complete the squares function below.
func squares(a int32, b int32) int32 {
	var res int32

	for i := a; i <= b; i++ {
		if square_check(int(i)) {
			res++
		}
	}

	return res
}
