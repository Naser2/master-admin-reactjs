import React from 'react';

export default function Preloader() {
  return (
    <div>
      <div class="loader preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div src='favicon.jpg' class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}
