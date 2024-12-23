import {NextResponse} from 'next/server';
import axios, {AxiosError} from 'axios';

export async function GET() {
  const targetUrl = 'https://phamgiatrihieu.io.vn'; // URL cần kiểm tra

  try {
    // Gửi yêu cầu GET để kiểm tra trạng thái của URL
    const response = await axios.get(targetUrl);

    if (response.status === 200) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false});
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Error checking URL:', axiosError.message);
    return NextResponse.json({
      success: false,
      error: 'Không thể truy cập trang',
    });
  }
}
