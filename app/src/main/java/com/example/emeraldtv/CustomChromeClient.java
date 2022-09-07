package com.example.emeraldtv;


import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.graphics.Bitmap;
import android.view.View;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.widget.FrameLayout;

public class CustomChromeClient extends WebChromeClient {
    private View customView;
    private WebChromeClient.CustomViewCallback customViewCallback;
    private int uiVisibility;
    private final Activity activity;
    private int mOriginalOrientation;

    CustomChromeClient(Activity activity) {
        this.activity = activity;
    }

    @Override
    public void onPermissionRequest(PermissionRequest request) {
        String[] resources = request.getResources();
        for (int i = 0; i < resources.length; i++) {
            if (PermissionRequest.RESOURCE_PROTECTED_MEDIA_ID.equals(resources[i])) {
                request.grant(resources);
                return;
            }
        }

        super.onPermissionRequest(request); }

    public Bitmap getDefaultVideoPoster()
    {
        return Bitmap.createBitmap(10, 10, Bitmap.Config.ARGB_8888);
    }

    public void onHideCustomView()
    {
        ((FrameLayout) activity.getWindow().getDecorView()).removeView(this.customView);
        this.customView = null;
        activity.getWindow().getDecorView().setSystemUiVisibility(this.uiVisibility);
        //activity.setRequestedOrientation(this.mOriginalOrientation);
        activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);;
        this.customViewCallback.onCustomViewHidden();
        this.customViewCallback = null;
    }

    public void onShowCustomView(View paramView, WebChromeClient.CustomViewCallback paramCustomViewCallback)
    {
        if (this.customView != null)
        {
            onHideCustomView();
            return;
        }
        this.customView = paramView;
        this.uiVisibility = activity.getWindow().getDecorView().getSystemUiVisibility();
        activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        this.mOriginalOrientation = activity.getRequestedOrientation();
        this.customViewCallback = paramCustomViewCallback;
        ((FrameLayout) activity.getWindow().getDecorView()).addView(this.customView, new FrameLayout.LayoutParams(-1, -1));
        activity.getWindow().getDecorView().setSystemUiVisibility(3846 | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    }
}

